class FileManagement{
    oRoute = "";
    oFs = "";
    oReader = "";
    mensaje = "hola desde js custom archivo prueba";

    InitWebkitPersistenStorage = function(){
        navigator.webkitPersistentStorage.requestQuota(5*1024*1024, GetSystemAcces);
    }

    GetSystemAcces(){
        window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
        window.requestFileSystem(PERSISTENT, 5*1024*2014, OnInitFs, GetErrors);
    }

    VeryfyPuebajs(){
        console.log(this.mensaje);
    }
}