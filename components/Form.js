// import styles from '../../styles/Form.module.scss'
import { useForm } from "@formcarry/react";

function Form() {
  const { state, submit } = useForm({
    id: "usxaj5dCPV",
  });

  // Success message
  if (state.submitted) {
    return <div>Bien reçu. Je reviens très vite vers vous !</div>;
  }

  return (
    <form onSubmit={submit}>
      <div className="mb-4">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="name">Nom</label>
            <input
              id="name"
              required
              className="ps-3 mt-1 form-control"
              placeholder=""
              type="name"
              name="name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              required
              className="ps-3 mt-1 form-control"
              placeholder="name@example.com"
              type="email"
              name="email"
            />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          rows="8"
          required
          className="form-control mt-1 ps-3"
          id="message"
          name="message"
        />
      </div>

      <button className="btn btn-primary d-block mt-4 ms-auto" type="submit">
        Envoyer{" "}
      </button>
    </form>
  );
}

export default Form;
