import * as React from "react";
import styled from "styled-components";
import FolderIcon from "@material-ui/icons/Folder";
import FileIcon from "@material-ui/icons/InsertDriveFile";

interface TreeItem {
  name: string;
  type: string;
}

interface Props {
  items: TreeItem[];
  Link: any;
  getLinkProps: (path: string) => any;
}

const Container = styled.div`
  border: 1px solid #d7eeff;
  border-radius: 9px;
  overflow: hidden;
  box-shadow: 5px 5px 3px -1px #b7b7b7;
`;

const A = styled.a`
  padding-left: 10px;
  color: #113f60;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const iconProps = {
  style: {
    color: "#78909C",
    height: 16,
    width: 16
  },
  fontSize: "small" as "small"
};

export const FolderTree: React.FunctionComponent<Props> = ({
  items,
  Link,
  getLinkProps
}) => (
  <Container>
    {items.map((item, idx) => {
      return (
        <div
          key={`${item.name}-${idx}`}
          style={{
            backgroundColor: idx % 2 === 0 ? "#FFFFFF" : "#F3FAFF",
            fontFamily: "Rubik",
            fontSize: 12,
            padding: 8,
            display: "flex",
            alignItems: "center"
          }}
        >
          {item.type === "tree" ? (
            <FolderIcon {...iconProps} />
          ) : (
            <FileIcon {...iconProps} />
          )}

          <Link {...getLinkProps(item.name)}>
            <A>{item.name}</A>
          </Link>
        </div>
      );
    })}
  </Container>
);

export default FolderTree;
