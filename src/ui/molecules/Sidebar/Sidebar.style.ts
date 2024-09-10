import styled from 'styled-components';
import * as TitleStyle from '../../atoms/Title/Title.style';

export const MenuIconOpen = styled.a`
	font-size: 1.5rem;
	color: #ffffff;
	position: absolute;
	right: 15px;
	top: 15px;
	cursor: pointer;
`

export const MenuIconClose = styled.a`
	display: flex;
	justify-content: end;
	font-size: 1.5rem;
	margin-top: 0.75rem;
	margin-right: 1rem;
	color: #ffffff;
`

export const SidebarMenu = styled.div<{ close: boolean }>`
	flex: 1;
	width: 250px;
	padding-top: 50px;
	background-color: ${({ theme }) => theme.colors.P2};
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${({ close}) => close ? '-200' : '0'}px;
`

export const MenuItems = styled.li`
	list-style: none;
	display: flex;
	align-items: start;
	justify-content: start;
	width: 100%;
	padding: 1rem 0 1.25rem;
`

export const MenuItemLinks = styled.a`
	display: flex;
	align-items: center;
	font-size: 20px;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.White};
	padding: 15px 10px;
	width: 100%;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.White};
		${TitleStyle.Title} {
			color: blue;
		}
	}
`