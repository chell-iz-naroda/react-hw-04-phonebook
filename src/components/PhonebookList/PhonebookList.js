import { List, ListItem, Text, Button } from './PhonebookList.styled';


export const PhonebookList = ({ contacts, onDelete }) => {
    return  contacts.length > 0 ? (
        <List>
            {contacts.map(({ id, name, number }) => (
                <ListItem key={id}>
                    <Text>{`${name}: ${number}`}</Text>
                    <Button type="button" onClick={() => onDelete(id)}>Delete</Button>
                </ListItem>
            ))}
        </List>
    ):
    (
        <Text>
          No contacts
        </Text>
    );
}