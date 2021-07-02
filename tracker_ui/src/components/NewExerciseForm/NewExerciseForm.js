import Button from "../Button/Button"
import InputBar from "../InputBar/InputBar"
import { useNewExerciseForm } from "../../hooks/useNewExerciseForm"
import "./NewExerciseForm.css"

export default function NewExerciseForm () {

const { form, errors, isLoading, handleOnSubmit, handleOnChange } = useNewExerciseForm()

    return (
      <div className="NewExercise">
        <h2>Add Exercise</h2>
  
        <div className="form">
          {errors.form && <span className="error">{errors.form}</span>}
  
          <InputBar
            name="name"
            type="text"
            label="Name"
            value={form.name}
            error={errors.name}
            placeholder="Exercise name"
            handleOnChange={handleOnChange}
          />
  
          <InputBar
            name="category"
            type="text"
            label="Category"
            value={form.category}
            error={errors.category}
            placeholder="Exercise category"
            handleOnChange={handleOnChange}
          />
  
          <div className="split-input-field">
            <InputBar
              name="duration"
              type="number"
              value={form.duration}
              error={errors.duration}
              label="Duration (min)"
              min={1}
              max={100000000}
              handleOnChange={handleOnChange}
            />
            <InputBar
              name="intensity"
              type="number"
              label="Intensity (1-10)"
              value={form.intensity}
              error={errors.intensity}
              handleOnChange={handleOnChange}
              min={0}
              max={10}
            />
          </div>
  
          <Button
            buttonType="primary"
            color="gold"
            isLoading={isLoading}
            isDisabled={isLoading}
            onClick={() => handleOnSubmit()}
          >
            Save
          </Button>
        </div>
      </div>
    )
  }
  
  



