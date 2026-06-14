from agents.core.base_agent import BaseAgent
from agents.core.agent_state import AgentState


class PlannerAgent(BaseAgent):

    def __init__(self):

        super().__init__(
            "Planner"
        )

    def execute(
        self,
        state: AgentState
    ):

        domain = state.domain

        if domain == "data_science":

            state.execution_plan = [

                "Load Dataset",

                "Perform EDA",

                "Train Model",

                "Evaluate Model",

                "Generate Report"
            ]

        elif domain == "travel":

            state.execution_plan = [

                "Get Destination",

                "Check Weather",

                "Find Hotels",

                "Generate Itinerary",

                "Estimate Budget"
            ]

        elif domain == "career":

            state.execution_plan = [

                "Analyze Resume",

                "Check ATS Score",

                "Suggest Improvements",

                "Recommend Jobs"
            ]

        elif domain == "coding":

            state.execution_plan = [

                "Analyze Problem",

                "Generate Code",

                "Test Solution",

                "Generate Explanation"
            ]

        else:

            state.execution_plan = [

                "Understand Query",

                "Generate Response"
            ]

        self.log(
            f"Plan Created: {len(state.execution_plan)} Tasks"
        )

        return state