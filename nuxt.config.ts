// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    app: {
        head:{
            link:[
                {
                    rel: 'stylesheet',
                    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
                    
                },
                {
                    rel:'stylesheet', 
                    href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" 
                }
            ],
            script:[
                {
                    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
                },
            ]
        }
    }
})
