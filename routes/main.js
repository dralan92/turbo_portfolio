const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const ProjectController = require('../controllers/ProjectController')

router.get('/', (req,res)=>{
    const projControler = new ProjectController()
    const data=req.context //{page:..., global:...}

    projControler.get()
    .then(projects=>{
        
        data['projects'] = projects
        res.render('landing', data)
    })
    .catch(err=>{
        res.send('OOps!'+ err.message)
    })
    
    
})

router.get('/project/:slug', (req,res)=>{
    const data = req.context
    const projetSlug = req.params.slug
    const projControler = new ProjectController()
    projControler.get({slug:projetSlug})
    .then(projects=>{
        if(projects.length ==0){
            throw new Error('Projetc Not Found')
            return    
        }
        const project = projects[0]
        data['project'] = project
        res.render('project',data)
    })

    

})

module.exports = router