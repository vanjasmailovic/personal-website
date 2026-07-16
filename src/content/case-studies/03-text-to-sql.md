---
order: 3
anchor: text-to-sql
title: Text-to-SQL AI Payments Analytics Agent
category: Analytics agents
summary: Natural-language access to grounded payments analytics for customers without SQL expertise.
problem: Customers needed self-serve payments analytics without SQL or specialist domain knowledge.
built: A live customer-facing analytics agent translating natural language into grounded payments queries.
technologies:
  - Python
  - GPT-4o
  - Chainlit
  - Tool calling
  - Schema grounding
  - SQL
  - FAISS
  - Light RAG
outcome: Enabled live natural-language access to expert-level payments insights and reduced reliance on manual analytics workflows.
outcomeType: qualitative
---

#### Ownership and approach

Co-developed the live customer-facing agent, combining payments-domain context with the underlying analytics schema and supporting documentation.

#### Important decisions and constraints

The agent needed to work for users without SQL or payments-domain knowledge. Tool calling and schema grounding handled query generation, while light RAG over company documentation supplied additional business context.
