import styled from 'styled-components'

const FlexBox = styled.div`
	display: flex;
	justify-content: ${props=> props.justifyContent? props.justifyContent : 'center'};
	align-items: ${props=> props.alignItems? props.alignItems : 'center'};
`

export default FlexBox