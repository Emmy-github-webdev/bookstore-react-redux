import styled from 'styled-components';

export const FormWrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 2.813rem;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    margin: 1.813rem;
    gap: 2.813rem;
    align-items: center;
    justify-content: center;
`;

export const AddBookInput = styled.input`
     padding: 10px;
     width: 44rem;
     border-radius: 4px
`;

export const CategoryInput = styled.input`
    padding: 10px;
    width: 19.813rem
    border-radius: 4px
`;

export const Headings = styled.span`
width: 10.875rem;
height: 1.5rem;
margin: 1.813rem 32.75rem 1.188rem 0;
font-family: Montserrat;
font-size: 1.25rem;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.18px;
color: #888;
align-self: flex-start;
margin-left: 5%;
`;

export const Button = styled.button`
border-radius: 3px;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
width: 11.5rem;
`;
