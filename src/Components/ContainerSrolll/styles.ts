import styled from 'styled-components';

export const Container = styled.div`
     margin-top:20px;
     padding:20px 40px;
     height: 100px;
     color: #FFF;
     position: relative;
     background-color: #424242;
    a{
        text-align:center;   
        padding:5px;
        margin: 0 5px;
    }

    
`;

export const MediaMenu = styled.div`

    @media (max-width: 768px){
        .menu{
            display:none;
            
        }
        
    }
   
    @media (min-width: 768px){
        .menu-mobile{
            display:none;
            
        }
    }
   



`
