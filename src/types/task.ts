interface Tags {
    id: string;
    name: string;
};

interface Comment {
    id: string;
    userId: string;
    content: string;
    createdAt: Date;
}

interface Attachment {
    id: string;
    fileName: string;
    fileType: string;
    fileSize: number;
    uploadedAt: Date;
    uploadedBy: string;
}

interface Subtask {
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
    dueDate: Date;
    createdAt: Date;
    updatedAt: Date;
}

export type NewTask = Omit<Task, "id">;

interface Task {
    id: string;
    title: string;
    projectId?: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
    priority: 'low' | 'medium' | 'high';
    dueDate: string;
    createdAt?: Date;
    updatedAt?: Date;
    assignedTo?: string;
    tags?: Tags[];
    comments?: Comment[];
    attachments?: Attachment[];
    subtasks?: Subtask[];
    estimatedTime?: number;
    actualTime?: number;
};

export default Task;