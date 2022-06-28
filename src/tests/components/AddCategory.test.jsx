import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('pruebas en AddCategory', () => {
    test('debe cambiar valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={()=>{}}/>)

        const input = screen.getByRole("textbox");
        fireEvent.input(input,{target: {value:"Saitama"}});
        //screen.debug();
        expect(input.value).toBe("Saitama");
    });

    test('debe de llamar OnNewCategory', () => {
        const inputValue= "Saitama";
        const onNewCategory = jest.fn(); //funcion ficticia
        render(<AddCategory onNewCategory={onNewCategory}/>)

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");
        fireEvent.input(input,{target:{value: inputValue}});
        //screen.debug();
        fireEvent.submit(form);
        expect(input.value).toBe("");

        expect(onNewCategory).toHaveBeenCalled(); //haya sido llamado
        expect(onNewCategory).toHaveBeenCalledTimes(1); //haya sido llamado 1 vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); //haya sido llamado por..

    });
    test('NO debe de llamar onNewCategory si el input esta vacio', () => {
        const inputValue= "";
        const onNewCategory = jest.fn(); //funcion ficticia
        render(<AddCategory onNewCategory={onNewCategory}/>)

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);        
    });
})