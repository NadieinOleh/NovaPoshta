import { List } from "@mui/material";
import { AddressItem } from "../../types/AddressItem";
import { ItemAddress } from "../ItemAddress";

type Props = {
  address: AddressItem[]
};

export const ListAdress: React.FC<Props> = ({ address }) => {
  return (
    <List>
      <ItemAddress address={address}/>
    </List>
  )
}