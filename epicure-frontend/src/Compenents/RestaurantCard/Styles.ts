import styled from "styled-components";

export const Restaurant = styled.div`
cursor:pointer;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
min-height: 288px;
width: 100%;
@media screen and (min-width:600px){
    min-height: 405px;
}
`
export const RestaurantImgDiv=styled.div`
height: 207px;
width:100%;
@media screen and (min-width:600px){
    height: 236px;
}`
export const RestaurantImg = styled.img`
width:100%;
height:100%;
`
export const RestaurantInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px;
gap: 10px;
background: #F9F4EA;
width:-webkit-fill-available;
height:100%;
@media screen and (min-width:600px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 24px;

}
`
export const RestaurantName = styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 2.67px;
color: #000000;
@media screen and (min-width:600px){
    font-size: 40px;
    line-height: 47px;
}
`
export const RestaurantChefName = styled.div`
height: 20px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 20px;
letter-spacing: 1.97px;
color: #000000;
@media screen and (min-width:600px){
height:30px;
font-size: 24px;
line-height: 30px;
}
`

export const Restaurantv2 = styled.div`
cursor:pointer;
display: flex;
flex-direction: column;
width:fit-content;
align-items: flex-start;
padding: 0px;
height: 233.34px;
@media screen and (min-width:600px){
    height: 357px;  
    width:19.5%;

}
`
export const Restaurantv2Img = styled.img`
height: 152.34px;
@media screen and (min-width:600px){
    height: 224px;
    width:100%;
}
`
export const RestaurantInfov2 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px;
gap: 10px;
height: 81px;
background: #F9F4EA;
width:87%;
@media screen and (min-width:600px){
    align-items: center;
    padding: 20px 0px 0px;
    gap: 8px;
    height: 133px; 
    width: 100%; 
}
`
export const Restaurantv2Name = styled.div`
height: 21px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 2.67px;
color: #000000;
@media screen and (min-width:600px){
    height: 47px;
    font-size: 30px;
    line-height: 47px;      
}
`
