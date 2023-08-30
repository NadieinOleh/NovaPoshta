import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import Avatar from '@mui/material/Avatar';
import { AddressItem } from "../../types/AddressItem";

type Props = {
  address: AddressItem[];
};

export const ItemAddress: React.FC<Props> = ({ address }) => {
  return (
    <>
      {address.map(({ CityDescription, Description, SiteKey }) => (
        <ListItem key={SiteKey}>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${CityDescription}, ${Description}`}
          />
        </ListItem>
      ))}
    </>
  );
};

