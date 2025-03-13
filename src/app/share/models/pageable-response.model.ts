export interface PageableResponse<T> {
    content: T[];
    pageable: {
        pageNumber: number;
        pageSize: number;
        sort: {
            sorted: boolean;
            unsorted: boolean;
            empty: boolean
        };
        offset: 0;
        paged: boolean;
        unpaged: boolean
    };
    totalPages: number;
    totalElements: number;
    last: boolean;
    numberOfElements: number;
    first: boolean;
    size: number;
    number: number;
    sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
    };
    empty: boolean;
}

/*{
    content: [
        {
            playerId: ab9acc58-1b7f-4f8a-a1ca-6f431f294b27;
            username: dawid.kostrzewski;
            isOnline: boolean;
            firstName: Dawid;
            lastName: Kostrzewski
        };
        {
            playerId: 106d4ec0-942c-4b94-aca0-a4e957608b18;
            username: testuser;
            isOnline: null;
            firstName: Test;
            lastName: User
        }
    ];
    pageable: {
        pageNumber: 0;
        pageSize: 10;
        sort: {
            sorted: boolean;
            unsorted: boolean;
            empty: boolean
        };
        offset: 0;
        paged: boolean;
        unpaged: boolean
    };
    totalPages: 1;
    totalElements: 2;
    last: boolean;
    numberOfElements: 2;
    first: boolean;
    size: 10;
    number: 0;
    sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean
    };
    empty: boolean
}*/
