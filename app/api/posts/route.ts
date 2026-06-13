import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const posts = await prisma.post.findMany({orderBy: { createdAt: 'desc' }});
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: `Ошибка подключения к серверу` }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const { title, slug, content, imageUrl, category } = await request.json();

    const post = await prisma.post.create({
        data: {
            title,
            slug,
            content: content || null,
            imageUrl: imageUrl || null,
            category,
        },
    });

    return NextResponse.json(post, { status: 201 });
}