import styled from 'styled-components';
export const Table = styled.table `
color: black;
width: 100%;
margin-bottom: 15px;
border-color: white;
border-spacing: 2px;
background-color: transparent;
`

export const Thead = styled.thead `
    display: table-header-group;
    vertical-align: middle;
    border:1px solid black;

`

export const Tbody = styled.tbody `
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
`
export const Tr = styled.tr `
    display: table-row;
    vertical-align: inherit;
    border:1px solid black;
`
export const Td = styled.td `
    padding: .75rem;
    vertical-align: top;
    border: 1px solid black};
`


export const Th = styled.th `
    background-color: white;
    color: black;
    text-align: inherit;
    border-top: 1px solid black;
    padding: .75rem;
    vertical-align: top;
    border-bottom: 1px solid black;
`