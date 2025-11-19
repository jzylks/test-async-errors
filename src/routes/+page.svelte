<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<a href="/no-error">
    Throw an error but don't crash when the state is declared first.
</a>
<a href="/no-error-state-used">
    Throw an error but don't crash when the declared state is read.
</a>
<a href="/error">Crash when state declared after the erroring await.</a>
