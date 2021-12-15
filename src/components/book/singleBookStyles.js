import styled from 'styled-components';

export const BookContainer = styled.div`
        width: 100%;
        max-width: 1100px;
        margin: auto;
        
`;
export const BookCardWrapper = styled.div`
        width: 75rem;
        height: 10.625rem;
        margin: 0.938rem 0.063rem 2.5rem 0;
        padding: 2rem 9.188rem 1.625rem 1.688rem;
        border-radius: 4px;
        border: solid 1px #e8e8e8;
        background-color: #fff;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const BookSectionOne = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
`;

export const BookCategory = styled.span`
width: 7rem;
height: 1.125rem;
margin: 0 4rem 0 0;
opacity: 0.5;
font-family: Montserrat;
font-size: 0.875rem;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #121212;
`;

export const BookTitle = styled.span`
    width: 3.375rem;
    height: 1.813rem;
    margin: 0.188rem 2.125rem 0 0;
    font-family: RobotoSlab;
    font-size: 1.375rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.2px;
    color: #121212;
`;

export const BookAuthor = styled.span`
    width: 5.813rem;
    height: 1.188rem;
    margin: 0.25rem 0.875rem 0 0;
    font-family: RobotoSlab;
    font-size: 0.875rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #4386bf;
    margin-bottom: 5px;
`;

export const BookCommandsWrapper = styled.div`
    width: 20%
`;

export const Comments = styled.span`
    width: 4.563rem;
    height: 1.188rem;
    margin: 0.188rem 0.938rem 0.125rem 0;
    font-family: RobotoSlab;
    font-size: 0.875rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #4386bf;
`;

export const BookRemove = styled.span`
    width: 3.375rem;
    height: 1.188rem;
    margin: 0.188rem 0.938rem 0.125rem 0.875rem;
    font-family: RobotoSlab;
    font-size: 0.875rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #4386bf;
    cursor: pointer;
`;

export const BookEdit = styled.span`
    width: 1.688rem;
    height: 1.188rem;
    margin: 0.188rem 18.625rem 0.125rem 1.063rem;
    font-family: RobotoSlab;
    font-size: 0.875rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #4386bf;
    
`;

export const BookSectionTwo = styled.div`
        width: 30%;
        display: flex;
`;

export const CircleCenter = styled.div`
width: 50px;
height: 50px;
background-color: transparent;
border: solid 10px #ddd;
border-top-color: #6e91b9;
border-bottom-color: #9983e7;
border-radius: 50%;
    
`;

export const CompletedWrapper = styled.div`
        width: 15%;
        display: flex;
        flex-direction: column;
`;

export const CompletedPerc = styled.span`
        width: 2.938rem;
        height: 2.438rem;
        margin: 0.063rem 7.063rem 0 0.688rem;
        font-family: Montserrat;
        font-size: 2rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #121212;
`;

export const CompletedText = styled.span`
    width: 5rem;
    height: 1.125rem;
    margin: 0.438rem 4.938rem 0.75rem 0.75rem;
    opacity: 0.5;
    font-family: Montserrat;
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #121212;
`;

export const BookSectionThree = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    
`;

export const BookChapter = styled.span`
    width: 7.875rem;
    height: 1.125rem;
    margin: 0.063rem 5.375rem 0 3.688rem;
    opacity: 0.5;
    font-family: RobotoSlab;
    font-size: 0.813rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #121212;
`;

export const BookLesson = styled.span`
        width: 13.25rem;
        height: 1.313rem;
        margin: 0.438rem 0 0.25rem 3.688rem;
        font-family: RobotoSlab;
        font-size: 1rem;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.4px;
        color: #121212;
`;

export const UpdateProgress = styled.div`
    width: 11.5rem;
    height: 2.063rem;
    margin: 0.75rem 1.75rem 0.563rem 3.688rem;
    padding: 0.438rem 1.188rem 0.5rem 1.375rem;
    border-radius: 3px;
    background-color: #0290ff;
    font-family: RobotoSlab;
    font-size: 0.813rem;
    font-weight: 300;
`;

export const BookLineDivider = styled.div`
    width: 0.125rem;
    height: 4.375rem;
    margin: 1.125rem 3.688rem 0 4.938rem;
    border: solid 1px #e8e8e8;
`;