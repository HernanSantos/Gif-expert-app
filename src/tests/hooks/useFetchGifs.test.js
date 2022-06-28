import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('pruebas en el hook useFetchGifs', () => {
    test('debe de regresar el estado inicial', () => {
        const {result} = renderHook(()=> useFetchGifs("One punch"));
        const {images,isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should ', async() => {
        const {result} = renderHook(()=> useFetchGifs("One punch"));
        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0)
        );
        const {images,isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
    
});