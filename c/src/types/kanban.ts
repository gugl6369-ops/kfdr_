export interface card{
    id: Number,
    role: CardRole;
    date: Date,
    status: Status,
    title: String,
    subtitle: String, 
    size: CardSize,
    priority: CardSize,
    deadline: Date,
    redact: Date | null,
    overdue: boolean,
} 


export type CardSize = "small" | "medium" | "critical";


export interface board{
    id: Number,
    kids: Number[],
    name: Status,
    lenght: Number,
}

export type Status = "todo" | "in-progress" | "review" | 'done';

export type CardRole =  'Designer' | 'Backender' | 'Frontender' | 'Tester' | 'Analyst';