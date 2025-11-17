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
    add?: boolean,
}

export type Status = "Todo" | "In-progress" | "Review" | 'Done';

export type CardRole =  'Designer' | 'Backender' | 'Frontender' | 'Tester' | 'Analyst';