
var oRoute;
var oFs;
var oReader;
var mensaje = "hola desde js custom";



function InitWebkitPersistenStorage(){
    navigator.webkitPersistentStorage.requestQuota(5*1024*1024, GetSystemAcces);
}

function GetSystemAcces(){
    window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
    window.requestFileSystem(PERSISTENT, 5*1024*2014, OnInitFs, GetErrors);
}

function OnInitFs(System)
{
    oRoute = "";
    oFs = System.root;
}

function ShowResult(result){
    console.log("ShowResult el archivo");
    console.log(result);
}

function GetErrors(Errors){
    console.log("GetErrors");
    console.log(Errors);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Directory Functions
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function CreateDirectory(dir_name){
    if(dir_name != "")
    {
        dir_name = oRoute + dir_name;
        oFs.getDirectory(dir_name, {create: true}, ShowResult, GetErrors);
    }
}

function DeleteDirectory(dir_name){
    if(dir_name != "")
    {
        dir_name = oRoute + dir_name;
        oFs.getDirectory(
                dir_name, 
                null, 
                function(oDir){
                    oDir.removeRecursively(ShowResult,GetErrors)
                }, 
                GetErrors
        );
    }
}

function GetCurrentDir(){
    oRoute = oFs.fullPath;
}

function GetParentDir(curr_dir){
    oFs.getDirectory(
        curr_dir, 
        null, 
        function(dir){
            dir.getParent(
                function(dir_parent){
                    oRoute = dir_parent.fullPath;
                },
                GetErrors
            );
        },
        GetErrors
    )
}

function ShowDirectory(dir_route)
{
    oFs.getDirectory(dir_route,null, ReadDir, GetErrors);
}

function ReadDir(dir){
    oReader = dir.createReader();
    Read();
}

function Read(){
    oReader.readEntries(
        function(archives){
            if(archives.length){
                List(archives)
            }
        }
        , 
        GetErrors
    );
}

function List(archives){
    for(var i = 0; i<archives.length; i++)
    {
        if(archives[i].isFile)
        {
            console.log("Archive: " + archives[i].name);
        }
        else
        {
            console.log("Directory: " + archives[i].name);
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// File Functions
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function CreateFile(file_name){
    if(file_name != "")
    {
        file_name = oRoute + file_name;
        oFs.getFile(file_name, {create: true, exclusive: false}, ShowResult, GetErrors);
    }
}

function MoveFile(file_name, dir_origin, dir_dest)
{
    var oFileDir = dir_origin + "/" + file_name;
    oFs.getFile(
        oFileDir, 
        null,
        function(oFile){
            oFs.getDirectory(
                dir_dest,
                null,
                function(oDir){
                    oFile.moveTo(
                        oDir, 
                        null,
                        function(result){
                            console.log(result);
                        },
                        GetErrors
                    )
                },
                GetErrors
            )

        },
        GetErrors
    );
}

function DeleteFile(file_name, dir_origin)
{
    var oFileDir = dir_origin + "/" + file_name;
    oFs.getFile(
        oFileDir, 
        null,
        function(oFile){
            oFile.remove(ShowResult,GetErrors)
        },
        GetErrors
    );
}

function WriteFile(file_name, InnerText)
{
    var oFileDir = file_name;
    oFs.getFile(
        oFileDir, 
        null,
        function(oFile){
            oFile.createWriter(
                function(oFileWriter){
                    var blob = new Blob([InnerText], {type: "text/html"});
                    oFileWriter.onwriteend = function(){console.log("File write succed..")};
                    oFileWriter.write(blob);
                },
                GetErrors
            )
        },
        GetErrors
    );
}

function ReadFile(file_name)
{
    var oFileDir = file_name;
    console.log(file_name);
    oFs.getFile(
        oFileDir, 
        {create:true, exclusive:false},
        function(oFile){
            oFile.file(
                function(dFile){
                    oReader = new FileReader();
                    console.log("File Name: " + dFile.name);
                    console.log("File Size: " + dFile.size + " bytes");
                    oReader.onload = function(e){
                        console.log(e.target.result);
                    };
                    oReader.readAsText(dFile);
                },
                GetErrors
            )
        },
        GetErrors
    );
}