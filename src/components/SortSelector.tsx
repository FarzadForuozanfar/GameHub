import { Menu, MenuButton, MenuList, Button, MenuItem } from "@chakra-ui/react";
import {BsChevronDown} from 'react-icons/bs';

interface Props{
  onSelecteSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
};

const SortSelector = ({onSelecteSortOrder, selectedSortOrder}: Props) => {
  const sortOrders = [
    {vlaue: "", label:"Relevance"},
    {vlaue: "-added", label:"Date added"},
    {vlaue: "name", label:"Name"},
    {vlaue: "-released", label:"Release Date"},
    {vlaue: "-metacritic", label:"Popularity"},
    {vlaue: "-rating", label:"Average rating"},
  ];

  const currentSortOrder = sortOrders.find(order => order.vlaue === selectedSortOrder);
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>} >
            Order By : {currentSortOrder?.label || 'Relevance'}
        </MenuButton>
        <MenuList>
            {sortOrders.map(order => <MenuItem onClick={() => 
              onSelecteSortOrder(order.vlaue)} key={order.vlaue}>{order.label}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default SortSelector