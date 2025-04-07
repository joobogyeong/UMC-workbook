import { ChangeEvent, useEffect, useState } from "react";

interface UseFormProps<T> {
    initialValue: T; // 예: { email: '', password: '' }
    validate: (values: T) => Record<keyof T, string>; // 값이 올바른지 검증하는 함수
}

function useForm<T>({ initialValue, validate }: UseFormProps<T>) {
    const [values, setValues] = useState(initialValue);
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});

    // 사용자가 입력값을 바꿀 때 실행되는 함수
    const handleChange = (name: keyof T, text: string) => {
        setValues(value => ({
            ...value,         // 불변성 유지 (기존 값 유지)
            [name]: text,     // 새로운 값 업데이트
        }));
    };

    const handleBlur = (name: keyof T) => {
        setTouched(touched => ({
            ...touched,
            [name]: true,
        }));
    };

    // 이메일 인풋, 패스워드 인풋, 속성들을 줘 가져오는 것
    const getInputProps = (name: keyof T) => {
        const value = values[name];

        const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
            handleChange(name, e.target.value);
        };

        const onBlur = () => handleBlur(name);

        return { value, onChange, onBlur };
    };

    // values가 변경될 때마다 에러 검증 로직이 실행됨
    useEffect(() => {
        const newErrors: Record<keyof T, string> = validate(values);
        setErrors(newErrors); // 오류 메시지 업데이트
    }, [validate, values]);

    return { values, errors, touched, getInputProps };
}

export default useForm