import { renderHook, act } from '@testing-library/react-hooks/dom/pure'
import useDarkreader from '../useDarkreader'

test('should useDarkreader be defined', () => {
  //expect(useDarkreader).toBeDefined();
})

// test('should be toggle to dark theme', () => {
//   const { result } = renderHook(() => useDarkreader(false))

//   expect(result.current[0]).toBe(false);

//   act(() => {
//     result.current[1]();
//   })

//   expect(result.current[0]).toBe(true);
// })
