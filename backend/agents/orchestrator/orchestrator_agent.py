from agents.core.base_agent import BaseAgent
from agents.core.agent_state import AgentState
from agents.domain_detector.detector import DomainDetector
from agents.planner.planner_agent import PlannerAgent

from agents.orchestrator.routing_engine import RoutingEngine
from agents.reporting_agent.reporting_agent import (
    ReportingAgent
)
from agents.orchestrator.execution_controller import (
    ExecutionController
)
from agents.domains.data_science.data_science_agent import (
    DataScienceAgent
)


class OrchestratorAgent(
    BaseAgent
):

    def __init__(self):

        super().__init__(
            "Orchestrator"
        )

        self.router = RoutingEngine()
        self.detector = DomainDetector()
        self.planner = PlannerAgent()
        self.reporter = ReportingAgent()
        self.data_science_agent = (
            DataScienceAgent()
        )
        self.controller = (
            ExecutionController()
        )

    def execute(
        self,
        state: AgentState
    ):

        self.log(
            "Received Query"
        )

        result = (
            self.detector.detect(
                state.user_query
            )
        )

        state.domain = result["domain"]

        self.log(
            f"Detected Domain: {state.domain}"
        )

        state = self.planner.execute(
            state
        )

        if state.domain == "data_science":

            state = (
                self.data_science_agent.execute(
                    state
                )
            )

        state = self.reporter.execute(
            state
        )

        return state