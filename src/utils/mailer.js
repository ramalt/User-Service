module.exports = async (data) => {
    const { email, link } = data

    console.info({ info: 'verification mail sent.' })
    return {
        message: `verification mail sent to ${email}`,
        link: link
    }
}