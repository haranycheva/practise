import { Item, List } from "./Gallery.styled";

export function Gallery({ data }) {
  return (
    <List>
      {data.map(({ id, src, alt }) => (
        <Item key={id}>
          <img src={src.large} alt={alt} />
        </Item>
      ))}
    </List>
  );
}
