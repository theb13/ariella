import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const Container = styled.div`
    /* background:#F8F8F8; */
    .slideFull{
        width:100%;
        .row{
            margin:auto;
            width:85%;
        }
    }
`;


export const StyledCard = styled(Card)`
      position: relative;
      color:#fff;
      .card-content{
        display:none;
        position: absolute;
        top:50%;
        left:10%;
        z-index:2;
      }
      
      :hover{
        .card-content{display:block;}
        .media{
          ::before{
            width: 100%;
            height: 100%;
           }
        }   
      }

      .media{
          ::before{
            display:block;
            position:absolute;
            z-index:1;
            top:0px;
            left:0px;
            content:'';
            width: 0%;
            height: 0%;
            background-color: rgb(22, 75, 148,0.8);
            transition: all 500ms ease;
            -moz-transition: all 500ms ease;
            -webkit-transition: all 500ms ease;
            -ms-transition: all 500ms ease;
            -o-transition: all 500ms ease;
           }
        }

    ::before,::after {
    position: absolute;
    content: '';
    bottom: 0px;
    height: 3px;
    width: 0px;
    transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -webkit-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
  
    background-color: #3039ac;
  }
  ::before {
    left: 0px;
    }
  ::after {
    right: 0px;
    }
  :hover::before,:hover::after {
    width: 50%;
  }
  
  `
