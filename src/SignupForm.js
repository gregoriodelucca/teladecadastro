import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './SignupForm.css';


const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://api.exemplo.com/cadastro', data);
      console.log('Usuário cadastrado com sucesso:', response.data);
      // Você pode redirecionar ou mostrar uma mensagem de sucesso aqui
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      // Trate o erro, mostrando uma mensagem ao usuário
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Cadastro</h2>
      
      <div>
        <label>Nome:</label>
        <input {...register('name', { required: 'Nome é obrigatório' })} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      
      <div>
        <label>Email:</label>
        <input {...register('email', { required: 'Email é obrigatório', pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' } } )} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      
      <div>
        <label>Senha:</label>
        <input type="password" {...register('password', { required: 'Senha é obrigatória', minLength: { value: 6, message: 'Mínimo 6 caracteres' } } )} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default SignupForm;
