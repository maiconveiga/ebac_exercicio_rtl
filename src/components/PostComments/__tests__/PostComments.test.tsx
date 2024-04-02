import { fireEvent, render, screen } from '@testing-library/react'
import PostComments from '..'

describe('Teste do PostComments', () =>{
    test('Adicionar dois comentários', () =>{
        render(<PostComments/>)
        const comentario = screen.getByRole('textbox')
        fireEvent.change(comentario, {
            target:{value:'Comentário aleatório 1'}
        })
        expect(comentario).toHaveValue('Comentário aleatório 1')
        fireEvent.click(screen.getByRole('button', {name: /comentar/i}))
        expect(screen.getByText('Comentário aleatório 1')).toBeInTheDocument()
        fireEvent.change(comentario, {
            target:{value:'Comentário aleatório 2'}
        })
        expect(comentario).toHaveValue('Comentário aleatório 2')
        fireEvent.click(screen.getByRole('button', {name: /comentar/i}))
        expect(screen.getByText('Comentário aleatório 2')).toBeInTheDocument()
        expect(screen.getAllByTestId("comentarioPostado")).toHaveLength(2);
    })
})