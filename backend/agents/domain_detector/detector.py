from agents.domain_detector.classifier import (
    DomainClassifier
)

from agents.domain_detector.domain_mapper import (
    DomainMapper
)


class DomainDetector:

    def __init__(self):

        self.classifier = (
            DomainClassifier()
        )

        self.mapper = (
            DomainMapper()
        )

    def detect(
        self,
        query: str
    ):

        domain = (
            self.classifier.classify(
                query
            )
        )

        display_name = (
            self.mapper.map_domain(
                domain
            )
        )

        return {
            "domain": domain,
            "display_name":
                display_name
        }