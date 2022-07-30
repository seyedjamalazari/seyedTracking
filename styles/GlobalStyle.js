import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        .ant-layout-header{
            width: 100%;
            background-color:#379E8F;
            height:78px;
            top:0;
           line-height:86px; 

                }
        .ant-modal-content{
         
    
      /* width:100%; */
      height:257;
         margin:0 auto;
         overflow-x: hidden;
         border-radius:5px;
       
      
        }
               .ant-modal-body{        
            
                    width:100%;
                  height:257;
                  margin:0 auto;
}  
   
.wrapperEmail{
    width:100%;
    height:54px;
    border:none;
    background-color:#eee;
    border-radius:6px;
     color:#3b9c91;
   
}

.ant-btn:hover{
 color:#3b9c91;
  background-color:#eee;
border-color:none;
}
.wrapperSubmit{
     width:100%;
    height:54px;
    border:none;
    background-color:#3b9c91;
    border-radius:6px;
    color:white;

}
.wrpperAddNew{
    border:none;
    color:#3b9c91;
}
.modalul{
    padding:0;
    list-style: none;
   
}
.inputmodal{
   border:1px solid #eee;
   height:40px;
   margin:5px auto;
  
}
          .Sharelinkviamodal{
            text-align:center;
            font-size: 24px;
            font-weight: 700;
            color:#737272;;
          }
          p{color:red;
        }

    }
`;
