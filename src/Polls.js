const BaseClass = require('./BaseClass')

class Polls extends BaseClass {
  async getPollsByTeamId (teamId) {
    return this.performRequest('GET', `/polls/${teamId}`)
  }

  async createPollForTeam (teamId, poll) {
    return this.performRequest('POST', `/polls/${teamId}`, poll)
  }

  async getPollFromTeamById (teamId, pollId) {
    return this.performRequest('GET', `/polls/${teamId}/${pollId}`)
  }

  async updatePollFromTeamById (teamId, pollId, poll) {
    return this.performRequest('PUT', `/polls/${teamId}/${pollId}`, poll)
  }

  async deletePollFromTeamById (teamId, pollId) {
    return this.performRequest('DELETE', `/polls/${teamId}/${pollId}`)
  }

  async getPollQuestionFromTeamById (teamId, pollId) {
    return this.performRequest('GET', `/polls/${teamId}/${pollId}/question`)
  }

  async getPollResponsesFromTeamById (teamId, pollId) {
    return this.performRequest('GET', `/polls/${teamId}/${pollId}/responses`)
  }

  async addResponseToPollFromTeamById (teamId, pollId, response) {
    return this.performRequest('POST', `/polls/${teamId}/${pollId}/responses`, response)
  }

  async voteOnPollResponse (teamId, pollId, response) {
    return this.performRequest('POST', `/polls/${teamId}/${pollId}/vote`, response)
  }
}

module.exports = Polls
