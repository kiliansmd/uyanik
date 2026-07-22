type ProcessStepsProps = { steps: string[] };
export function ProcessSteps({ steps }: ProcessStepsProps){return <ol className="process-steps">{steps.map((step,index)=><li key={step}><span>{String(index+1).padStart(2,'0')}</span><p>{step}</p></li>)}</ol>}
