type Point = {
  name: string;
  link: string;
};

type TListProps = {
  points: Point[];
  disabled?: boolean;
  listTitle?: string;
  parentComponent?: string;
};

export type { Point, TListProps };
