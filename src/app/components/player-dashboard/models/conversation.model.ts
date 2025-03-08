export type Conversation = {
    messages: ConversationMessage[];
}

export type ConversationMessage = {
    userId: string;
    content: string;
}
