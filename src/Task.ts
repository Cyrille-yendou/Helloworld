export type Task= {
    id :string;
    content : string;
    createdAT : Date;
    completedAt : Date;
    status : 'todo' | 'doing' | 'done';
};