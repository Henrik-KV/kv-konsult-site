---
description: Guide users through a structured workflow for co-authoring documentation, proposals, technical specs, and decision docs. Use when writing documentation or structured content.
---

# Doc Co-Authoring Workflow

Structured workflow for collaborative document creation through three stages: Context Gathering, Refinement & Structure, and Reader Testing.

## Stage 1: Context Gathering

**Goal:** Close the gap between what the user knows and what the AI knows.

### Initial Questions
1. What type of document is this? (tech spec, decision doc, proposal, etc.)
2. Who's the primary audience?
3. What's the desired impact when someone reads this?
4. Is there a template or specific format to follow?
5. Any other constraints or context?

### Info Dumping
Encourage dumping all context:
- Background on the project/problem
- Related discussions or documents
- Why alternatives aren't being used
- Timeline pressures or constraints
- Technical architecture or dependencies
- Stakeholder concerns

Then ask 5-10 clarifying questions based on gaps.

**Exit condition:** Sufficient context gathered when edge cases and trade-offs can be discussed without needing basics explained.

## Stage 2: Refinement & Structure

**Goal:** Build the document section by section.

For each section:
1. **Clarify**: Ask 5-10 questions about what should be included
2. **Brainstorm**: Generate 5-20 potential points to include
3. **Curate**: User indicates what to keep/remove/combine
4. **Gap Check**: Ask if anything important is missing
5. **Draft**: Write the section based on selections
6. **Refine**: Iterate with surgical edits until satisfied

**Section ordering:** Start with whichever section has the most unknowns.

### Near Completion (80%+ sections done)
Re-read the entire document and check for:
- Flow and consistency across sections
- Redundancy or contradictions
- Generic filler ("slop")
- Whether every sentence carries weight

## Stage 3: Reader Testing

**Goal:** Verify the document works for readers.

1. **Predict**: Generate 5-10 questions readers would realistically ask
2. **Test**: Review document as a fresh reader for each question
3. **Check**: Look for ambiguity, false assumptions, contradictions
4. **Fix**: Address gaps found

### Quality Principles
- Be direct and procedural
- Use `str_replace` for edits, never reprint whole doc
- Each iteration should make meaningful improvements
- The goal is a document that actually works for readers
