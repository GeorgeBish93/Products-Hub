import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "All" },
    { value: "Awesome", label: "Awesome" },
    { value: "Generic", label: "Generic" },
    { value: "Handmade", label: "Handmade" },
    { value: "Intelligent ", label: "Intelligent " },
    { value: "Luxurios", label: "Luxurios" },
    { value: "Modern", label: "Modern" },
    { value: "Oriental", label: "Oriental" },
    { value: "Sleek", label: "Sleek" },
    { value: "Small ", label: "Small " },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Filter by: {currentSortOrder?.label || "Brand"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
