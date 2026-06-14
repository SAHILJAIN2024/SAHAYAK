from agents.core.base_agent import BaseAgent
from agents.core.agent_state import AgentState

from llm.providers.gemini.gemini_client import (
    GeminiClient
)


class ReportingAgent(
    BaseAgent
):

    def __init__(self):

        super().__init__(
            "ReportingAgent"
        )

        self.llm = GeminiClient()

    def execute(
        self,
        state: AgentState
    ):

        prompt = f"""

User Query:
{state.user_query}

Detected Domain:
{state.domain}

Execution Plan:
{state.execution_plan}

Tool Outputs:
{state.tool_outputs}

Generate a detailed report in the following format:

1. Dataset Overview
2. Data Quality Analysis
3. EDA Insights
4. Problem Type
5. Target Variable

6. Model Leaderboard
   - Show ALL models
   - Show Accuracy/R2
   - Show MAE/RMSE/F1

7. Top 3 Models
   - Explain why selected

8. Hyperparameter Tuning Results
   - Show best params
   - Show best score

9. Best Model
   - Model Name
   - Performance

10. Feature Importance
    - Top 10 Features

11. Recommendations

Do NOT skip any section.
"""

        response = (
            self.llm.generate(
                prompt
            )
        )

        state.final_response = (
            response
        )

        self.log(
            "Response Generated"
        )

        return state