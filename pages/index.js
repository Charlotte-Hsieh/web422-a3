/*********************************************************************************
* WEB422 – Assignment 3
*
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
*
* Name: YI-LIEN HSIEH Student ID: 105889240 Date: 04-06-2026
*
* Vercel App (Deployed) Link: _____________________________________________________
*
********************************************************************************/

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Form, Button } from 'react-bootstrap';
import PageHeader from '@/components/PageHeader';

export default function Home() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      author: '',
      title: '',
      subject: '',
      language: '',
      first_publish_year: ''
    }
  });

  function submitSearch(data) {
    router.push({
      pathname: '/books',
      query: Object.fromEntries(Object.entries(data).filter(([key, value]) => value !== ''))
    });
  }

  return (
    <>
      <PageHeader text="Book Search" subtext="Search for books using the Open Library database" />
      <Form onSubmit={handleSubmit(submitSearch)}>
        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            {...register('author', { required: true })}
            className={errors.author ? 'is-invalid' : ''}
          />
          {errors.author?.type === 'required' && (
            <div className="invalid-feedback">Author is required</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" {...register('title')} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" {...register('subject')} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Language</Form.Label>
          <Form.Control type="text" {...register('language')} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>First Publish Year</Form.Label>
          <Form.Control type="text" {...register('first_publish_year')} />
        </Form.Group>
        <Button type="submit" variant="primary">Search</Button>
      </Form>
    </>
  );
}