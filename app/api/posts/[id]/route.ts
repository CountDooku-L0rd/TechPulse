import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = parseInt(params.id);
    if (isNaN(id)) {
        return NextResponse.json({ error: 'Неверный ID' }, { status: 400 });
    }

    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) {
        return NextResponse.json({ error: 'Пост не найден' }, { status: 404 });
    }
    return NextResponse.json(post);
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = parseInt(params.id);
    if (isNaN(id)) {
        return NextResponse.json({ error: 'Неверный ID' }, { status: 400 });
    }

    const { title, slug, content, imageUrl, category } = await request.json();

    try {
        const updated = await prisma.post.update({
            where: { id },
            data: { title, slug, content, imageUrl, category },
        });
        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: 'Пост не найден или данные некорректны' }, { status: 404 });
    }
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = parseInt(params.id);
    if (isNaN(id)) {
        return NextResponse.json({ error: 'Неверный ID' }, { status: 400 });
    }

    const updates = await request.json();
    try {
        const updated = await prisma.post.update({
            where: { id },
            data: updates,
        });
        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: 'Пост не найден' }, { status: 404 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = parseInt(params.id);
    if (isNaN(id)) {
        return NextResponse.json({ error: 'Неверный ID' }, { status: 400 });
    }

    try {
        await prisma.post.delete({ where: { id } });
        return new NextResponse(null, { status: 204 });
    } catch (error) {
        return NextResponse.json({ error: 'Пост не найден' }, { status: 404 });
    }
}