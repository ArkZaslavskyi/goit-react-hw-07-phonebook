import styled from "styled-components";

export const ListItem = styled.li`
    display: flex;
    align-items: center;

    padding: 12px 8px;

    :not(:last-of-type) {
        border-bottom: 1px dotted  gray;
    }
`;

export const ContactName = styled.span`
    position: relative;

    :after {
        content: ':';
        display: inline-block;
        position: absolute;
        left: calc(100% + 2px);
        
        width: 1px;
        height: 100%;

    }
`;

export const ContactPhone = styled.span`
    margin-left: 16px;
`;

export const DeleteBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;
    padding: 0;
    margin: 0;
    margin-left: auto;
    border: none;
    border-radius: 4px;
    background-color: transparent;
    cursor: pointer;
    color: #f44336;


    :hover {
        background-color: #e2e5e8;
    }

    :active {
        background-color: #bdbdbd;
    }
`;