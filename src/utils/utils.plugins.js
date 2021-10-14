import M from 'materialize-css'
export default {
    install: (app) => {

   app.config.globalProperties.$myToast= function (html) {
          M.toast({html})


       }

       app.config.globalProperties.$myError = function  (html) {
           M.toast({html : `[Ошибка] ${html}` })
        }



    }
}