import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('/types', () => {
        return HttpResponse.json([
            { name: "온라인", id: 0 },
            { name: "오프라인", id: 1 }
        ]);
    }),
    http.get('/dates', ({ request }) => {

        const url = new URL(request.url)

        const type = url.searchParams.get('type')

        if (type === "0") {
            return HttpResponse.json([
                { name: "1990-1-1", id: 0, terms: "온라인 1990년 이용약관" },
                { name: "1991-1-1", id: 1, terms: "온라인 1991년 이용약관" }
            ]);
        } else if (type === "1") {
            return HttpResponse.json([
                { name: "2000-1-1", id: 2, terms: "오프라인 2000년 이용약관" },
                { name: "2001-1-1", id: 3, terms: "오프라인 2001년 이용약관" }
            ]);
        }
    }),
];