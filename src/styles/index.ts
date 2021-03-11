import styled from "styled-components";

interface Props {
  justifyContent?: string;
  alignItems?: string;
  textAlign?: string;
  height?: string;
  width?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  flexWrap?: boolean;
  background?: boolean;
}

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: #d3e2e6;
  margin: 10px 0px;
`;

export const Title = styled.h2`
  color: ${(props: Props) => props.color || "#4d6f80"};
  font-size: ${(props: Props) => props.fontSize || "22px"};
  text-align: ${(props: Props) => props.textAlign || "left"};
`;

export const Text = styled.p`
  font-family: 'Nunito_600SemiBold';
  font-size: ${(props: Props) => props.fontSize || '1rem'};
  color: ${(props: Props) => props.color || '#5c8599'};
  font-weight: ${(props: Props) => props.fontWeight || 'normal'};
`;


export const Input = styled.input`
  color: ${(props: Props) => props.color || "#5c8599"};
  height: 50px;
  width: 100%;
  padding: 0 16px;
  background: #f5f8fa;
  border: 1px solid #d3e2e6;
  border-radius: 20px;
  outline: none;
  color: #5c8599;
`;


export const Row = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: ${(props: Props) => props.justifyContent || 'flex-start'};
  align-items: ${(props: Props) => props.alignItems || 'center'};
  flex-wrap: ${({flexWrap}: Props) => flexWrap? 'wrap' : 'nowrap'};
`;

export const Column = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: ${(props: Props) => props.justifyContent || 'center'};
  align-items: ${(props: Props) => props.alignItems || 'stretch'};
`;

export const Padding = styled.div`
    padding:40px;
    margin:20px 0px;
    background: ${({background}: Props) => background? '#F8F8F8' : '#fff'};
`;
